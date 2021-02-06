import React, {useState} from 'react';
import {View ,StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, regbool, subtmitButtonText, onSubmit}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            {regbool
                ?<Spacer>
                    <Input
                    label="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                    autoCorrect={false}            
                    />
                 </Spacer>
                : null
            }
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}            
            />
            <Spacer/>
            <Input
                secureTextEntry
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {regbool

                ?<Input
                secureTextEntry
                label="Confirmar contraseña"
                value={confirmPass}
                onChangeText={setConfirmPass}
                autoCapitalize="none"
                autoCorrect={false}
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

const styles = StyleSheet.create({});

export default AuthForm;