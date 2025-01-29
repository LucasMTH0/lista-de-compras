export function imageToBase64(image: any){
  const fileReader = new FileReader();
  let imageConverted: any = null;
  fileReader.readAsDataURL(image.target.files[0]);
  fileReader.onload = () => {
    imageConverted =  fileReader.result
  }
  return imageConverted;
}
