import { useState } from "react"

export const Qrcode = () => {
const [img,setImg] = useState("");
const [loading,setLoading]=useState(false);
const [qrData,setData] = useState("")
const [qrSize,setSize] = useState("")

async function generateQr(){
  setLoading(true);
  try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
    setImg(url);
  }catch(error) {
    console.error("Error generating QR code",error);
  }finally{
    setLoading(false);
  }
}
function downloadQr() {
  fetch(img)
  .then((response)=>response.blob())
  .then((blob)=>{
    const link =document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
  })
  .catch((error) => {console.error("Error Downloading QR code", error)})
}
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading &&<p>Please wait...</p>}
        {img && <img src={img}  className="qrImage" />}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for Qr code :</label>

            <input type="text" id="dataInput" value={qrData} placeholder="Enter data for QR code" onChange={(e)=>setData(e.target.value)}/>

            <label htmlFor="sizeInput" className="input-label">Image size(e.g.,150):</label>

            <input type="text" id="sizeInput" value={qrSize} placeholder="Enter Image Size" onChange={(e)=>setSize(e.target.value)}/>

            <button className="gen" onClick={generateQr} disabled={loading} >Generate QR Code</button>
            <button className="down" onClick={downloadQr}>Download QR Code</button>
        </div>
        <p className="footer">Designed by <span><b>
          Hari</b>..</span></p>
    </div>
  )
}
