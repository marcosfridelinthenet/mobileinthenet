//import { Colors } from './Colors.js'

const viewContent = () => {
    return {
        backgroundColor: "#111111",
        width: "100%",
        height: "100%"
    }
}


const viewSearchTop = () => {
    return {
        backgroundColor: "black",
        width: "100%",
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'BIZUDPGothic'
    }
}

const viewSearchTopText = () => {
    return {
        color: "white",
        fontFamily:'BIZUDPGothic',
        fontSize: 23,
        fontWeight: "bold",
    }
}

const viewSearchContent = () => {
    return {
        height: 150,
        alignItems: "center",
        justifyContent: 'center',
        padding: 20,
        width: "100%"
    }

}

const viewResultTopLeft = () => {
    return {
        flex: 5,
        flexDirection: "column"
    }
}

const viewResultTopRight = () => {
    return {
        flex: 3
    }
}

const input = () => {
    return {
        fontFamily:'BIZUDPGothic',
        fontSize: 50,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '50%'        
    }
}

const button = () => {

    return {
        backgroundColor: "#d81b60",
        color: "white",
        fontFamily:'BIZUDPGothic',
        padding: 5,
        alignItems: "center",
        borderRadius: 3,
        fontWeight: "bold", 
    }
}


const viewResultTop = () => {
    return {
        flexDirection: 'row',
        backgroundColor: "black",
        width: "100%",
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'BIZUDPGothic',
        fontSize: 23,
        fontWeight: "bold",
    }
}


const viewResultTopText = () => {
    return {
        color: "white",
        fontFamily:'BIZUDPGothic',
        fontSize: 12,
        fontWeight: "bold",
    }
}

const viewResultTopTextCode = () => {
    return {
        color: "white",
        fontFamily:'BIZUDPGothic',
        fontSize: 30,
        fontWeight: "bold",
    }
}

const viewResultList = () => {
    return {
        width: "100%"
    }
}

const itemSeparator = () => {

    return {
        height: 2,
        width: "100%",
        backgroundColor: "#eeeeee",
    }
}

const itemList = () => {

    return {
        color: "white",
        width: "100%",
        fontFamily:'BIZUDPGothic',
        fontSize: 30,
        fontWeight: "bold",
        padding: 20
    }
}

const viewResultContent = () => {

    return {
        backgroundColor: "red",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
}

const viewResultContentText = () => {

    return {
        color: 'white',
        alignItems: "center",
        justifyContent: "center",
        fontFamily:'BIZUDPGothic',
        fontSize: 85,
        fontWeight: "bold",
    }
}

module.exports = {
    button: button(),
    input: input(),
    viewResultList: viewResultList(),
    itemList: itemList(),
    itemSeparator: itemSeparator(),
    viewContent: viewContent(),
    viewSearchTop: viewSearchTop(),
    viewSearchTopText: viewSearchTopText(),
    viewSearchContent: viewSearchContent(),
    viewResultTop: viewResultTop(),
    viewResultTopLeft: viewResultTopLeft(),
    viewResultTopRight: viewResultTopRight(),
    viewResultTopText: viewResultTopText(),
    viewResultTopTextCode: viewResultTopTextCode(),
    viewResultContent: viewResultContent(),
    viewResultContentText: viewResultContentText(),
}