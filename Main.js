import React,{ useState,useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import Navigator from './HomeStack';
import { Alert } from 'react-native';


export default function Main({navigation}) {

    const [user,setUser] = useState({username: null,password:null,score:null,min:null,max:null,genre:null});
    const [batch,setBatch] = useState([]);
    const t = 6
    const db = [
        {title:'john wick',genre:'action',score:68,year:2014},
        {title:'the raid 2',genre:'action',score:71,year:2014},
        {title:'mad max: fury road',genre:'action',score:90,year:2015},
        {title:'kill bill:vol 1',genre:'action',score:69,year:2002},
        {title:'hardcore henry',genre:'action',score:51,year:2016},
        {title:'pulp fiction',genre:'drama',score:94,year:1994},
        {title:'shame',genre:'drama',score:72,year:2011},
        {title:'under the skin',genre:'drama',score:80,year:2014},
        {title:'mommy',genre:'drama',score:71,year:2015},
        {title:'birdman',genre:'drama',score:87,year:2014},
        {title:'suspiria',genre:'horror',score:64,year:2018},
        {title:'the witch',genre:'horror',score:81,year:2016},
        {title:'the lighthouse',genre:'horror',score:83,year:2019},
        {title:'midsummer',genre:'horror',score:67,year:2018},
        {title:'hereditary',genre:'horror',score:87,year:2018},
        {title:'the lobster',genre:'comedy',score:82,year:2016},
        {title:'the favorite',genre:'comedy',score:91,year:2018},
        {title:'snatch',genre:'comedy',score:55,year:2001},
        {title:'Monthy Python and the holy grail',genre:'comedy',score:91,year:1975},
        {title:'Borat',genre:'comedy',score:89,year:2006},
];
    const validGenre = (genre) =>{
        for(let i = 0;i<user.genre.length;i++){
            if(genre == user.genre[i]){return true}
        }
        return false
    }
    const verificare = (movie) =>{
        if(movie.score < user.score ){return false}
        if(movie.year > user.max || movie.year < user.min){return false}
        if(validGenre(movie.genre) == false){return false}
        return true
    }

    const shuffleBatch = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const createBatch = async () =>{
        let b = []
        for(let i=0;i<db.length;i++){
            if(verificare(db[i]) == true){
                b.push(db[i])
            }
        }

        b = shuffleBatch(b)
        setBatch( arr => [ ...b]);

    }

    const remove = () =>{
        let list = batch
        list.splice(0,1)
        setBatch( arr => [ ...list]);
    }

    const test = () =>{
        remove();
    }

    useEffect(() => {
        setUser({
            username: navigation.getParam('username'),
            password: navigation.getParam('password'),
            score: Number(navigation.getParam('score')),
            min: Number(navigation.getParam('min')),
            max: Number(navigation.getParam('max')),
            genre: navigation.getParam('genre'),
        })
        createBatch()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.text}>{batch.length > 0 ? batch[0].title : 'null'}</Text>
                <Text style={styles.text}>{batch.length > 0 ? batch[0].genre : 'null'}</Text>
                <Text style={styles.text}>{batch.length > 0 ? batch[0].score : 'null'}</Text>
                <Text style={styles.text}>{batch.length > 0 ? batch[0].year : 'null'}</Text>
            </View>  
            <Pressable style={styles.button} onPress={test}>
                <Text style={styles.text}>CONFIRM</Text>
              </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
    },
    title_container: {
        flex:2,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
    fontSize:50,
        color: "#FFF"
    },
    button:{    
        flex:0.5,
        backgroundColor:'#696969',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
