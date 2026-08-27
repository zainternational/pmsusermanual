# Shared helpers for Hotelium server deploy scripts (Windows + PuTTY).

function Get-DeployConfig {
    $scriptRoot = Split-Path -Parent $MyInvocation.PSCommandPath
    $repoRoot = (Resolve-Path (Join-Path $scriptRoot '..')).Path
    $defaults = @{
        # www.hotelium.com.mm resolves here. Deploying to any other host looks
        # like it succeeded and publishes nothing.
        ServerHost          = '13.229.150.25'
        ServerUser          = 'ubuntu'
        PpkPath             = 'D:\ZA\Documents - Hotelium\7.Key\7CHotelium\hotelium_key.ppk'
        PlinkPath           = 'C:\Program Files\PuTTY\plink.exe'
        PscpPath            = 'C:\Program Files\PuTTY\pscp.exe'
        ManualRemotePath    = '/var/www/hotelium/docs'
        SiteIndexRemotePath = '/var/www/hotelium/index.html'
        SiteIndexLocalPath  = Join-Path $scriptRoot 'local/site-index.html'
        ProjectRoot         = $repoRoot
        BuildPath           = Join-Path $repoRoot 'build'
    }

    $localConfigPath = Join-Path $scriptRoot 'deploy-config.local.ps1'
    if (Test-Path $localConfigPath) {
        $local = & $localConfigPath
        foreach ($key in $local.Keys) {
            $defaults[$key] = $local[$key]
        }
    }

    foreach ($tool in @('PlinkPath', 'PscpPath', 'PpkPath')) {
        if (-not (Test-Path $defaults[$tool])) {
            throw "Missing $tool : $($defaults[$tool])"
        }
    }

    $defaults['RemoteTarget'] = "{0}@{1}" -f $defaults.ServerUser, $defaults.ServerHost
    return $defaults
}

function Invoke-RemoteCommand {
    param(
        [Parameter(Mandatory)]
        [hashtable]$Config,
        [Parameter(Mandatory)]
        [string]$Command
    )

    & $Config.PlinkPath -batch -i $Config.PpkPath "$($Config.RemoteTarget)" $Command
    if ($LASTEXITCODE -ne 0) {
        throw "Remote command failed (exit $LASTEXITCODE): $Command"
    }
}

function Sync-ManualBuild {
    param(
        [Parameter(Mandatory)]
        [hashtable]$Config
    )

    if (-not (Test-Path $Config.BuildPath)) {
        throw "Build folder not found: $($Config.BuildPath). Run npm run build first."
    }

    $remote = $Config.ManualRemotePath
    Write-Host "Uploading manual build to ${remote} ..." -ForegroundColor Cyan

    Invoke-RemoteCommand -Config $Config -Command "mkdir -p $remote && rm -rf ${remote}/*"

    $buildGlob = Join-Path $Config.BuildPath '*'
    & $Config.PscpPath -batch -r -i $Config.PpkPath $buildGlob "$($Config.RemoteTarget):${remote}/"
    if ($LASTEXITCODE -ne 0) {
        throw "Manual upload failed (exit $LASTEXITCODE)"
    }

    Write-Host "Manual deployed to https://hotelium.com.mm/docs/" -ForegroundColor Green
}

function Download-SiteIndex {
    param(
        [Parameter(Mandatory)]
        [hashtable]$Config,
        [string]$OutputPath
    )

    $localPath = if ($OutputPath) { $OutputPath } else { $Config.SiteIndexLocalPath }
    $localDir = Split-Path -Parent $localPath
    if (-not (Test-Path $localDir)) {
        New-Item -ItemType Directory -Force -Path $localDir | Out-Null
    }

    Write-Host "Downloading $($Config.SiteIndexRemotePath) -> $localPath" -ForegroundColor Cyan
    & $Config.PscpPath -batch -i $Config.PpkPath "$($Config.RemoteTarget):$($Config.SiteIndexRemotePath)" $localPath
    if ($LASTEXITCODE -ne 0) {
        throw "Download failed (exit $LASTEXITCODE)"
    }

    Write-Host "Saved: $localPath" -ForegroundColor Green
    return $localPath
}

function Upload-SiteIndex {
    param(
        [Parameter(Mandatory)]
        [hashtable]$Config,
        [string]$InputPath,
        [switch]$SkipBackup
    )

    $localPath = if ($InputPath) { $InputPath } else { $Config.SiteIndexLocalPath }
    if (-not (Test-Path $localPath)) {
        throw "Local file not found: $localPath. Run scripts/download-site-index.ps1 first."
    }

    $remote = $Config.SiteIndexRemotePath
    if (-not $SkipBackup) {
        $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
        $backupCmd = "cp $remote ${remote}.bak.$stamp"
        Write-Host "Creating server backup: ${remote}.bak.$stamp" -ForegroundColor DarkGray
        Invoke-RemoteCommand -Config $Config -Command $backupCmd
    }

    Write-Host "Uploading $localPath -> $remote" -ForegroundColor Cyan
    & $Config.PscpPath -batch -i $Config.PpkPath $localPath "$($Config.RemoteTarget):$remote"
    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed (exit $LASTEXITCODE)"
    }

    Write-Host "Site index updated on https://hotelium.com.mm/" -ForegroundColor Green
}
