# Upload edited index.html back to hotelium.com.mm
#
# Usage:
#   .\scripts\upload-site-index.ps1
#   .\scripts\upload-site-index.ps1 -InputPath .\my-index.html
#   .\scripts\upload-site-index.ps1 -SkipBackup
#   npm run site:upload

param(
    [string]$InputPath,
    [switch]$SkipBackup
)

$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\Deploy-Common.ps1"

$config = Get-DeployConfig
Upload-SiteIndex -Config $config -InputPath $InputPath -SkipBackup:$SkipBackup
