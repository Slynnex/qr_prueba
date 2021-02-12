import React, {useState} from 'react';
import {View ,StyleSheet, Image} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';
import logo from '../img/logimg.png';

const AuthForm = ({ headerText, errorMessage, regbool, subtmitButtonText, onSubmit}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    return (
        <>
            <Spacer>
                <Text style={styles.titulo}>{headerText}</Text>
            </Spacer>
            <View style={styles.img}>
            <Image source={logo} style={styles.logo} />
            </View>
            
            {regbool
                ?<Spacer>
                    <Input style={styles.inp}
                    label="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                    autoCorrect={false}
                    placeholder={'Nombre'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'             
                    />
                 </Spacer>
                : null
            }
            <Input style={styles.inp}
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={'Email'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'            
            />
            <Spacer/>
            <Input style={styles.inp}
                secureTextEntry
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={'Contraseña'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent' 
            />
            {regbool

                ?<Input style={styles.inp}
                secureTextEntry
                label="Confirmar contraseña"
                value={confirmPass}
                onChangeText={setConfirmPass}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={'Confirmar contraseña'}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent' 
                />
                :null
            }
            {errorMessage 
                ? <Text>{errorMessage}</Text>
                :null
            }
            <Spacer>
                <Button 
                    title={subtmitButtonText}
                    onPress={() => onSubmit({nombre, email, password})}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    logo:{
        alignItems: 'center',
        width:120,
        height: 120
    },
    img:{
        alignItems:'center'
    },
    titulo:{
        textAlign: 'center',
        color: 'black',
        fontSize: 40,
        fontWeight: "500",
        marginTop: 10,
        opacity: 0.5
    },
    inp:{
        width: 500
    },
});

export default AuthForm;