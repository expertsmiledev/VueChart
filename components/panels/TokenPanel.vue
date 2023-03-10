<template>
        <div class="tokenContainer">
            <div class="tokenTitle">Token Details</div>
            <div class="tokenContent fs-bold flex-row">  
                <div class="tokenHeader">
                    <div class="h-2-1 border-right border-bottom"> 
                        <div class="h-2-1 flex-Halign-left" style="font-size: 20px; padding-left: 10px;">  Ticker </div>     
                        <div class="h-2-1 flex-Halign-right" style="font-size: 35px; padding-right: 10px"> HMT </div>
                    </div>
                    <div class="h-2-1 border-right"> 
                        <div class="h-2-1 flex-Halign-left" style="font-size: 20px; padding-left: 10px;  padding-top: 10px">  Token Price </div>     
                        <div class="h-2-1 flex-Halign-right" style="font-size: 35px; padding-right: 10px"> <span style="font-size: 28px">USD</span> &nbsp; &nbsp; &nbsp; 7.6 </div>
                    </div>
                </div>
                <div class="tokenBody">
                    <div class="h-3-1 border-bottom" style="display:flex"> 
                        <span class="w-2-1 flex-Halign-left flex-Valign-center" >  Circulating Supply </span>     
                        <span class="w-2-1 flex-Halign-right flex-Valign-center" > 120,000,000 </span>
                    </div>
                    <div class="h-3-1 border-bottom" style="display:flex"> 
                        <span class="w-2-1 flex-Halign-left flex-Valign-center" >  Total Supply </span>     
                        <span class="w-2-1 flex-Halign-right flex-Valign-center" > 1,000,000,000 </span>
                    </div>
                    <div class="h-3-1 border-bottom" style="display:flex"> 
                        <span class="w-2-1 flex-Halign-left flex-Valign-center" >  Marcket Cap </span>     
                        <span class="w-2-1 flex-Halign-right flex-Valign-center" > USD &nbsp;&nbsp; 1,000,000,000 </span>
                    </div>
                </div>
                
            </div>
            <div class="tokenInform"> 
                <div class="layout1" >Token Type &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size: 30px">ERC-20</span></div>
                <div class="layout2" style="font-size: 20px; width: calc(70% - 20px);">Contract Address &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size: 30px">ERC-20</span></div>
            </div>
            <div class="tokenInform"> 
                <div class="smartBtn" style="margin-right: 2%"> <div class="w-2-1 flex-Halign-left" style="height: 30px;">Smart contract audit:</div> <div  style="height: 50px; font-size: 32px;" class="w-2-1 flex-Halign-right">Loremisum</div></div>
                <div class="smartBtn" style="margin-left: 2%"> <div class="w-2-1 flex-Halign-left" style="height: 30px;">Escrow Factory</div> <div  style="height: 50px; font-size: 32px;" class="w-2-1 flex-Halign-right">Lorepmisum</div></div>  
            </div>
            <div class="tokenInform">
                <img src="../../assets/images/Landbar/logos.png" style="width: 100%; height: 100%">
            </div>
        </div>
        
</template>

<style scoped>
.tokenBody span{
    display:flex;
}
.smartBtn{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(50% - 50px);
    height: calc(100% - 30px);
    padding: 15px 25px; 
    background-color: #320A8D;
    border-radius: 25px;
    font-size: 18px;
    color: white;
}
.tokenContainer{
    display: flex;
    flex-direction: column;
    background: rgba(12, 32, 213, 0.06);
    border-radius: 30px;
    width: 100%;
    height: 991px; 
    padding: 143px 0px;
    padding-bottom: 10px;
    align-items: center;
    z-index: 100;
    margin-bottom: 100px;
}
.tokenTitle{
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.4px;
    color: #320A8D;
    margin-bottom: 50px;
}

.tokenInform{
    display: flex;
    align-items: center;
    width: 1088px;
    height: 80px;
    margin: 20px 0px;
}
.layout1{
    padding: 20px 0px;
    padding-left: 20px;
    border-radius: 25px;
    font-size: 20px; width:30%;
    margin-right: 30px;
    background-color: white;
}
.layout2{
    padding: 20px 0px;
    padding-left: 20px;
    border-radius: 25px;
    font-size: 20px; width:70%;
    background-color: white;
}
.tokenContent{
    width: calc(1088px);
    height: 300px;
    background-color: white;
    padding: 40px;
    color: #320A8D;
    display: flex;
    flex-direction: row;
}

.tokenHeader{
    width: 180px;
    height: 100%;
}
.tokenBody{
    width: calc(100% - 200px);
    height: 100%;
    padding: 0px 10px;
}
</style>