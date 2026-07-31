# Build and upload PMS manual to hotelium.com.mm/docs/
#
# Usage:
#   .\scripts\deploy-manual.ps1
#   .\scripts\deploy-manual.ps1 -SkipBuild
#   npm run deploy:manual

param(
    [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\Deploy-Common.ps1"

$config = Get-DeployConfig
Set-Location $config.ProjectRoot

if (-not $SkipBuild) {
    Write-Host "Building Docusaurus site..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "npm run build failed (exit $LASTEXITCODE)"
    }
}

Sync-ManualBuild -Config $config
