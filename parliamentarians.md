---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Aktuelle Bundestagsabgeordnete
---

<div class="dashboard-container">
    <iframe src="https://wahlen.leibniz-hbi.de/admin/s/public/app/dashboards?auth_provider_hint=anonymous1#/view/5d8a41c0-1afe-11ec-a392-8ffbc25c9816?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2021-04-07T22%3A00%3A00.000Z'%2Cto%3Anow))&hide-filter-bar=true" frameborder="0" id="dashboard">
    </iframe>
</div>
<script  type="text/javascript">
    let iframe = document.getElementById('dashboard');
    setTimeOut(() => {

        // Adjusting the iframe height onload event
        iframe.onload = function()
        // function execute while load the iframe
        {
          // set the height of the iframe as 
          // the height of the iframe content
          iframe.style.height = 
          iframe.contentWindow.document.body.scrollHeight + 'px';
           
  
         // set the width of the iframe as the 
         // width of the iframe content
        iframe.style.width  = 
        iframe.contentWindow.document.body.scrollWidth+'px';
              
        }
          
        // Adjusting the iframe height onload event
        iframe.onload = function()
        // function execute while load the iframe
        {
          // set the height of the iframe as 
          // the height of the iframe content
          iframe.style.height = 
          iframe.contentWindow.document.body.scrollHeight + 'px';
           
  
         // set the width of the iframe as the 
         // width of the iframe content
         iframe.style.width  = 
          frame.contentWindow.document.body.scrollWidth+'px';      
        }
    }, 1500);
</script>
