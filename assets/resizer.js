window.addEventListener('load', function() {
    // Adjusting the iframe height onload event
    setInterval(function () {
        let iframe = document.getElementById('dashboard');
        let wrapper = document.getElementsByClassName('wrapper').item(1);
        if(iframe !== null & wrapper !== null) {
            // function execute while load the iframe
            // set the height of the iframe as 
            // the height of the iframe content
            iframe.style.height = wrapper.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            // set the width of the iframe as the 
            // width of the iframe content
            // iframe.style.width = iframe.contentWindow.document.body.scrollWidth+'px';
            // console.log("Resizing:", iframe.style.width, iframe.style.height);
        }
    }, 1000);
});
