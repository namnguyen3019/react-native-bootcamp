import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

class MyFormClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            counter: 0,
        }
    }

    handleTextChange = (text) => {
        this.setState({
            text: text,
        })
    }

    handleIncrease = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrease = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    handleResetCount = () => {
        this.setState({ counter: 0 })
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{
                        backgroundColor: 'red',
                        marginTop: 50,
                        border: 'black',
                    }}
                    value={this.state.text}
                    onChangeText={this.handleTextChange}
                />

                <Text>{this.state.counter}</Text>

                <TouchableOpacity onPress={this.handleDecrease}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleIncrease}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleResetCount}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MyFormClass
