import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('setting.db')

const executeSql = async (sql, params) => {  
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                sql,
                params,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

}

export const initDb = () => {
/*     executeSql(
        'DELETE FROM setting'
    ) */
    return executeSql(
        'CREATE TABLE IF NOT EXISTS setting (modetheme TEXT)'
    );

}

export const saveSetting = (modetheme) => {
    executeSql(
        'DELETE FROM setting'
    )
    .then((result) => {
        return executeSql(
            'INSERT INTO setting (modetheme) VALUES(?)',
            [modetheme]
        );
    })
    .catch((error) => {
        console.log(error);
    })
}


export const fetchSetting = async () => {
    let setting = [];

    await executeSql(
        'SELECT * FROM setting',
        []
    ).then((result) => {
        //console.log('fetchSetting result', result)
        if(result.rows && result.rows._array.length > 0)
            setting =  result.rows._array;
    })
    .catch((error) => {
        console.log(error);
    });
    
    return setting;
}

