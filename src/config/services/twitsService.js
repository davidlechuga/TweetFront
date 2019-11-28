

const JSONApplicationHeaders = {
	"Content-Type" : "application/json",
	Accept         : "application/json"
};

const handleResponse = async (res) => {
    const data = await res.clone().json();
    console.log(data);
    
	if (!res.ok || data.message === "error") {
		const error =  data.message || data.label || "Ha ocurrido un error";
		return Promise.reject(error);
	}
	return data;
};

const searchTwitsSimpleWord = async (word) => {
    const requestOptions = {
		method  : "GET",
        headers : JSONApplicationHeaders,

    };
    const response = await fetch ( `https://twiitgov.mybluemix.net/search/${word}`, requestOptions)
    .then (handleResponse);
    return response;
}

const twitsService = {searchTwitsSimpleWord};

export default twitsService





