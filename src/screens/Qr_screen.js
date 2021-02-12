import * as React from 'react';
import {Text,View,StyleSheet,Button,Alert,Dimensions,Image} from 'react-native';
import * as Permissions from 'expo-permissions';

import {BarCodeScanner} from 'expo-barcode-scanner';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7

export default class Qr extends React.Component {
    state = {
      hasCameraPermission: null,
      scanned: false,
      Codigo: this.props.navigation.getParam('Codigo'),
      Nombre: this.props.navigation.getParam('Nombre'),
      Status: this.props.navigation.getParam('Status'),
      Ubicacion: this.props.navigation.getParam('Ubicacion'),
      Cantidad : this.props.navigation.getParam('Cantidad'),
    };

    autenticar=(codigo)=>{
      fetch(`https://rocky-woodland-57876.herokuapp.com/api/qr?Codigo=${codigo}`,
              {
                  method: 'GET',
                  
  
              }).then((response) => response.json()).then((responseJson) =>
              {
                  if(!responseJson.msg){
                      this.props.navigation.navigate('Main',{codeList: responseJson.Codigo, nameList:responseJson.Nombre, Cantidad:responseJson.Cantidad, Fecha: responseJson.Fecha, Ubicacion: responseJson.Ubicacion, Conteo: responseJson.Conteo, Status: responseJson.Status, Imagen: responseJson.Imagen})
                      //Alert.alert(codigo,responseJson.Descripcion +"\n"+ responseJson.Cantidad);
                  }else{
                      Alert.alert(codigo,responseJson.msg);
                  }
              
              }).catch((error) =>
              {
                  console.error(error);
                  
              });
    }
    
  
    async componentDidMount() {
      this.getPermissionsAsync();
    }
  
    getPermissionsAsync = async() => {
      const {
        status
      } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted'
      });
    };
  
    render() {
      const {
        hasCameraPermission,
        scanned
      } = this.state;
  
      if (hasCameraPermission === null) {
        return (<Text> Requesting
        for camera permission </Text>);
      }
      if (hasCameraPermission === false) {
        return <Text> No access to camera </Text>;
      }
      return ( 
       
        <View style={{flex:1, backgroundColor:'black'}}> 
        <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned}
        style = {[StyleSheet.absoluteFill,styles.container]}>
        
        <Image
        style={styles.qr} 
        source={require('../../assets/qr.png')}/>
        <Text style={styles.cancel}
        onPress={()=>this.props.navigation.navigate('Main',{codeList: this.state.Codigo, nameList:this.state.Nombre, Status: this.state.Status, Ubicacion: this.state.Ubicacion, Cantidad: this.state.Cantidad})}>Cancelar</Text>
        {scanned && (<Button title = {'Escanear otra vez'}
            onPress = {() => this.setState({scanned: false})}/>)
        }
        </BarCodeScanner>
        </View>
      );
    }
  
    handleBarCodeScanned = ({
      type,
      data
    }) => {
      this.setState({scanned: true});
      this.autenticar(data);
    };
    
  }
  const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',

      },
    barcode:{
        
    },
      qr: {
        marginTop: '50%',
        marginBottom: '30%',
        width: qrSize,
        height: qrSize,
        
      },
      description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
        marginBottom:10
      },
  });