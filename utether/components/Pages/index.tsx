import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
 


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت تتر-tether price"} style={{ minHeight: 100, margin: 20, width: "calc(100% - 20px)" }}>

      <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:20, textAlign:"center"}}>
          <br-x/>
          <br-xx/>
          قیمت لحظه ای:{(props.p.price as number).toLocaleString("fa-IR")} تومان

        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:10, textAlign:"center"}}>
          
          current price:{props.p.price} toman
          
        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:20, textAlign:"center"}}>
          <br-x/>
          <br-xx/>
         تغیر قیمت در ۲۴ ساعت: {(props.p.diff24d as number).toLocaleString("fa-IR")}  ٪

        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:10, textAlign:"center"}}>
          
          change in 24 hours:{props.p.diff24d}%
          
        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:20, textAlign:"center"}}>
          <br-x/>
          <br-xx/>
        تغییر قیمت در یک هفته :{(props.p.diff7d as number).toLocaleString("fa-IR")}  ٪

        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:10, textAlign:"center"}}>
          
          change in a week:{props.p.diff7d}%
          
        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:20, textAlign:"center"}}>
          <br-x/>
          <br-xx/>
        تغییر قیمت در یک ماه:{(props.p.diff30d as number).toLocaleString("fa-IR")}  ٪

        </div>

        <div style={{width:"100%", height:100, backgroundColor:"#b3ccb1", borderRadius:10, textAlign:"center"}}>
          
          change in a month:{props.p.diff30d}%
          
        </div>

        


        <center style={{fontSize:9}}>
          rutherford team(demo)
        </center>


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT
    console.log("priceeeeeeee:",p)
  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}