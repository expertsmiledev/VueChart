<template>
    <div style="width: 100%">
        <div class="navbarContainer flex-row">  
            <img src="../../assets/images/Navbar/logo.png"><div class="menuPopBtn" style="margin-left: 50px;"> <hr class="menuPopBtn"></div>
            <div class="navBtnContainer ">
                <div class="navBtnContent flex-Arow flex-Halign-right flex-Valign-center">
                    
                    <button class="appBtn primaryBtn navBtn"> Join </button>
                    <NuxLinker class="navBtn"> Resources </NuxLinker>
                    <NuxLinker class="navBtn"> Team </NuxLinker>
                    <NuxLinker class="navBtn"> Ecosystem </NuxLinker>
                    <NuxLinker class="navBtn"> Code  </NuxLinker>
                    <NuxLinker class="navBtn"> Products  </NuxLinker>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NuxtNavbar'
}
</script>

<style>
.menuPopBtn{
    display: none;
    width: 30px;
    height: 8px;
    border-width: 0px;
    border-top: 4px solid salmon;
    border-bottom: 4px solid salmon;
    background-color: transparent;
}
.navbarContainer {
    display: flex;
    width: calc(100% - 100px);
    height: 33px;
    margin-top: 66px;
    padding: 50px;
}
.navBtnContainer {
    width: calc(100%);
    height: 100%;
    text-align: right;
}

.navBtnContent {
    display: flex;
    height: 100%;
}

.flex-Halign-center{ 
    justify-content: center; text-align: center;
}
.flex-Valign-center{
    height: 100%;
    align-items: center;
    
}
.flex-Halign-left{
    text-align: left; 
    justify-content: left;
}
.flex-Halign-right{
    text-align: right; 
    justify-content: right;
    float: right;
}

.flex-Arow {
    flex-direction: row-reverse;
}
.flex-row {
    flex-direction: row;
}
.flex-column{
    flex-direction: column;
}
.fc-darkBlue{
    color:#320A8D;
}
.fs-bold{
    font-weight: 700 !important;
}
.w-2-1 {
    width: 50% !important;
    height: 100%;
}
.h-2-1 {
    height: 50% !important;
    width: 100%;
}
.h-3-1 {
    height: 33.3% !important;
    width: 100%;
}

.border-right{
    border-right: 2px solid #eee;
}
.border-bottom{
    border-bottom: 2px solid #eee;
}
.blur-low{
    filter: blur(16px);
}

.bg-darkBlue{
    background-color: #320A8D;
    color: white;
}
.appBtn{
    width: 132px;
    height: 56px;
    display: flex; justify-content: center; text-align: center; align-items: center;
    
}

.primaryBtn{
    color: #320A8D;
    box-sizing: border-box;
    background: linear-gradient(145.2deg, #F0F2FC -4.32%, #FFFFFF 61.97%);
    border: 4px solid #FFFFFF;
    border-radius: 10px;
    cursor: pointer;
}
.navBtn{
    text-decoration: none;
    user-select: none;
    font-family: 'Alliance No1';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-right: 70px;
    color: #320A8D;
    cursor: pointer;
}

.pathIcon{
    border: 1px solid #320A8D;
    transform: matrix(1, 0, 0, -1, 0, 0);
}

.flex-row{
    display: flex;
    flex-direction: row;
}
</style>
