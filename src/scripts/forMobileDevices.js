

export default function forMobileDevices() {

    redirect();
    window.addEventListener('resize', redirect);

    function redirect() {
        if (window.innerWidth < 900) {
            sessionStorage.setItem('smallRes', 'true');
            window.location.assign('/standby.html');
        };
    };
};