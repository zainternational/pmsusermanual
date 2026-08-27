# Copy to deploy-config.local.ps1 to override paths on your machine.
# deploy-config.local.ps1 is gitignored.

@{
    ServerHost   = '13.229.150.25'  # the host serving www.hotelium.com.mm
    ServerUser   = 'ubuntu'
    PpkPath      = 'D:\ZA\Documents - Hotelium\7.Key\7CHotelium\hotelium_key.ppk'
    PlinkPath    = 'C:\Program Files\PuTTY\plink.exe'
    PscpPath     = 'C:\Program Files\PuTTY\pscp.exe'

    # PMS manual (Docusaurus build)
    # Subfolder:  https://hotelium.com.mm/docs/
    ManualRemotePath = '/var/www/hotelium/docs'
    # Subdomain:  https://docs.hotelium.com.mm/
    # ManualRemotePath = '/var/www/docs.hotelium.com.mm'

    # Main marketing site
    SiteIndexRemotePath = '/var/www/hotelium/index.html'
    SiteIndexLocalPath  = 'scripts/local/site-index.html'
}
