export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places',{method:'PUT',
        body: JSON.stringify({places:places}),
        headers:{
            'content-Type':'application/json'
        }
    });

    const resData = await response.json();
    if(!resData){
        throw new error('Unable to store data!!!');
        
    }

    return resData.message;
}

export async function fetchUserPlaces(){
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();

    if(!response.ok){
        throw new Error('Failed to fetch places!!!')
    }

    return resData.places;
}