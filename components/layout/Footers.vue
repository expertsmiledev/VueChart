<template>
        <div class="footerContainer"> 
            <div class="emailSenderContainer">
                <div class="newsPanel">
                    <div class="header">Get HUMAN news and updates</div>
                    <div class="flex-row" style="width: 100%; height: 60px;">
                        <div class="fc-darkBlue btnPrimary border" style="width:calc(100% - 200px);"> your@email.com </div>
                        <div class="btnPrimary border bg-darkBlue"> Subscribe </div>
                    </div>
                    <div class="tip">By subscribing you agree to our Public Privacy</div>
                </div>
                <div class="extraPanel"></div>
                <div class="normalLinkersPanel">
                    <img src="../../assets/images/Footer/linker.png">
                    <img src="../../assets/images/Footer/linker 1.png">
                    <img src="../../assets/images/Footer/linker 2.png">
                    <img src="../../assets/images/Footer/linker 3.png">
                    <img src="../../assets/images/Footer/linker 4.png">
                </div>
            </div>
            <div class="menuContainer fc-darkBlue fs-bold">
                <div class="btnPrimary" style="background-color: transparent; text-align: left">Products <p>HUMAN App</p> <p>Proof of HUMANity</p> <p>IMOO</p></div>
                <div class="btnPrimary" style="background-color: transparent;">Discover <p>Token</p><p>Routing layer</p><p>Team</p><p>Careers</p></div>
                <div class="btnPrimary" style="background-color: transparent;">Build<p>Developers</p><p>Technology</p><p>DevBounty Program</p><p>BlugBounty Program</p><p>Github</p><p>Giants Program</p></div>
                <div class="btnPrimary" style="background-color: transparent;">Community<p>Grants Program</p> <p>Ellit Ops Program</p><p>Events</p></div>
                <div class="btnPrimary" style="background-color: transparent;">Resource <p>Documents Hub</p><p>Lite Paper</p><p>Technical WhitePaper</p><p>System Status</p><p>In The News</p><p>One Pagers Archive</p><p>Brand Assists</p></div>
                <div class="btnPrimary" style="background-color: transparent;">Impact Projects <p>Blog</p><p>Explorer</p></div>
            </div>
            <div class="outSenderContainer">
                <div class="header">Third-party communites</div>
                <div class="flex-row" style="width: 100%; height: 60px;">
                    <div class="w-2-1 flex-Halign-left">  
                        <div class="h-2-1 flex-Halign-right" >  Telegram </div>     
                        <div class="h-2-1 flex-Halign-left" > icon </div>
                    </div>     
                    <div class="w-2-1 flex-Halign-right"> 
                        <div class="h-2-1 flex-Halign-right" >  Mixin </div>     
                        <div class="h-2-1 flex-Halign-left" > icon </div>
                    </div>
                </div>
                <div class="tip">
                    <div class="btnPrimary" style="background-color: transparent;">HUMAN app</div>
                    <div class="btnPrimary" style="background-color: transparent;">Token</div>
                    <div class="btnPrimary" style="background-color: transparent;">Developers</div>
                    <div class="btnPrimary" style="background-color: transparent;">Grants Program</div>
                    <div class="btnPrimary" style="background-color: transparent;">Documents Hub</div>
                    <div class="btnPrimary" style="background-color: transparent;">Blog</div>
                </div>
                
            </div>
        </div>
</template>

<style scoped>
p{
    margin-bottom: 10px !important;
}
.footerContainer{
    width: 100%;
    height: 1050px;
    display: flex;
    flex-direction: column;
}
.menuContainer>.btnPrimary{
    margin-right: 5%;
}
.tip>.btnPrimary{
    cursor: pointer;
    margin-right: 6%;
}
.normalLinkersPanel> img{
    margin-right: 20px;
    width: 50px;
    padding-top: 25px;
    height: 60px;
}
.normalLinkersPanel> img:hover{
    width: 55px;
    height: 65px;
}
.border{
    border: 2px solid #320A8D;
}
.btnPrimary{
    padding: 15px 20px;
    border-radius: 10px;
    margin-right: 25px;
    cursor: pointer;
}
.tip{
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.32px;
    color: #320A8D;
    flex-direction: row;
    display: flex;
    justify-content:start;
    flex-wrap: wrap;
    text-align: left;
}
.header{
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.32px;
    color: #320A8D;
    margin-bottom: 30px;
    text-align: left;
}
.extraPanel{
    width: calc(100% - 1200px);
}
.newsPanel{
    width: 650px;
    display: flex;
    flex-direction: column;
}
.normalLinkersPanel{
    width: 500px;
    display: flex;
    justify-content: center;
}
.emailSenderContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 78%;
    padding: 50px 11%;
    max-width: 1880px;
    background: #FBFBFE;
}
.menuContainer{
    width: 100%;
    height: 500px;
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #F1F2FD;
    max-width: 1880px;
}
.outSenderContainer{
    width: 78%;
    max-width: 1880px;
    height: 300px;
    padding: 0px 11%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #E9EBFA;
}
</style>

<script>
export default {
  name: 'NuxtFooter'
}
</script>