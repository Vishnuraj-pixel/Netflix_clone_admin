import toast from "react-hot-toast";
import customFetch from "./axios";
const fetchData = async (url, formData) => {
  console.log("url: " + url, "formData: " + formData)

  return await customFetch.post(url, formData).catch(err => {
    const response = err?.response;
    if (response.status === 401) {
      toast.error(response.data.msg)
    }
    if (response.status === 500) {
      toast.error(`Something went wrong`)
    }
    console.log(err)
    return;
  }).then((res) => {
    console.log(res)
    return res?.data;
  })
}
export default fetchData;