# Hotelium deploy helper — shows common commands.
#
# Usage:
#   .\scripts\deploy.ps1 manual
#   .\scripts\deploy.ps1 site-download
#   .\scripts\deploy.ps1 site-upload

param(
    [Parameter(Position = 0)]
    [ValidateSet('manual', 'site-download', 'site-upload', 'help')]
    [string]$Action = 'help'
)

$ErrorActionPreference = 'Stop'

switch ($Action) {
    'manual' {
        & "$PSScriptRoot\deploy-manual.ps1" @args
    }
    'site-download' {
        & "$PSScriptRoot\download-site-index.ps1" @args
    }
    'site-upload' {
        & "$PSScriptRoot\upload-site-index.ps1" @args
    }
    default {
        Write-Host @"

Hotelium deploy scripts
=======================

Manual (PMS docs at /docs/):
  npm run deploy:manual              Build + upload to server
  npm run deploy:manual:upload       Upload existing build only (-SkipBuild)

Main website index.html:
  npm run site:download              Download from server -> scripts/local/site-index.html
  npm run site:upload                Upload scripts/local/site-index.html -> server

Direct PowerShell:
  .\scripts\deploy-manual.ps1 [-SkipBuild]
  .\scripts\download-site-index.ps1 [-OutputPath path]
  .\scripts\upload-site-index.ps1 [-InputPath path] [-SkipBackup]

Config override (optional):
  Copy scripts\deploy-config.example.ps1 -> scripts\deploy-config.local.ps1

"@
    }
}
