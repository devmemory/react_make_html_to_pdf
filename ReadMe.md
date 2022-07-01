## 1. 특정 element를 지정
<div className="div_container">  
    <div className="div_paper"/>  
</div>  

const paper = document.querySelector(".div_container > .div_paper  

## 2. canvas를 이용해 html을 이미지로 변환  
const canvas = await html2canvas(paper)

const imageFile = canvas.toDataURL("image/png", 1.0)  

## 3. pdf로 변환  
const doc = new jsPDF("p", "mm", "a4")

const pageWidth = doc.internal.pageSize.getWidth()  
const pageHeight = doc.internal.pageSize.getHeight()  

doc.addImage(imageFile, "JPEG", 0, 0, pageWidth, pageHeight)

### 3.1 pdf 미리보기  
window.open(doc.output("bloburl")  

### 3.2 pdf 저장  
doc.save("이름.pdf")  

### 3.3 서버로 pdf 파일 보내기  
const pdf = new File([doc.output("blob")], "test.pdf", {type: "application/pdf"})

const formData = new FormData()
formData.append("file", pdf)
formData.append("type", "pdf")
formData.append("name", "test")

const res = await axios.post("/pdf/upload_file", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },

// 해당부분은 서버와 약속이 필요
if (res.data.code === 1) {
    window.open(`${util.mode()}${res.data.link}`);
}