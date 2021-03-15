import axiosClient from "./axiosClient";




const userApi = {
    get(params){
        const url = '/users';
        return axiosClient.get(url, {params: params})
    },
    add(data){
        const url = `/users`;
        return axiosClient.post(url, data)
    },
    update(data){
        const url = `/users/${data.id}`;
        return axiosClient.patch(url, data)
    },
    remove(id){
        const url = `/users/${id}`;
        return axiosClient.delete(url)
    }
    
}
export default userApi;