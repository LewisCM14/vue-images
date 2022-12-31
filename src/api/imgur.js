import qs from "qs";
import axios from "axios";

const CLIENT_ID = "";
const ROOT_URL = "https://api.imgur.com";

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: "token",
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
            querystring
        )}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    uploadImages(images, token) {
        // convert the array like object before mapping over each file and uploading (imgur allows 1 file upload per request)
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            // pass a key of image with the image file reference
            formData.append("image", image);

            // make the post request to the imgur api with form data and required headers
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        });
        // once entire array is mapped return out of function
        return Promise.all(promises);
    },
};
