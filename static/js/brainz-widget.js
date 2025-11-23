// ListenBrainz albums widget script
// Add this to your page if you want the albums widget functionality
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('brainz-iframe');
    const select = document.getElementById('mus-sel');
    
    if (iframe && select) {
        select.addEventListener('change', function() {
            const username = iframe.src.match(/\/art\/grid-stats\/([^\/]+)\//)[1];
            iframe.src = `https://api.listenbrainz.org/1/art/grid-stats/${username}/${this.value}/3/1/128?caption=false`;
        });
    }
});

