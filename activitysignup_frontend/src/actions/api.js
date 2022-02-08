import axios from "axios"

const baseUrl = "http://localhost:5131/api/"

export default {
    activityCandidate(url=baseUrl+'ACandidates/'){
        return{
            fetchAll:() => axios.get(url),
            fetchById : id => axios.get(url+id),
            create: newRecord => axios.post(url, newRecord),
            update:(id,updatedRecord) => axios.put(url+id, updatedRecord),
            delete:id => axios.delete(url+id)
        }
    }
    
}