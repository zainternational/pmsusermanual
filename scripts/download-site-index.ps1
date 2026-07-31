# Download hotelium.com.mm index.html from the server for local editing.
#
# Usage:
#   .\scripts\download-site-index.ps1
#   .\scripts\download-site-index.ps1 -OutputPath .\my-index.html
#   npm run site:download

param(
    [string]$OutputPath
)

$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\Deploy-Common.ps1"

$config = Get-DeployConfig
Download-SiteIndex -Config $config -OutputPath $OutputPath
