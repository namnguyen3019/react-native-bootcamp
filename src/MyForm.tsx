import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

const MyForm = () => {
    const [text, setText] = useState<string>('')
    return (
        <View>
            <TextInput value={text} onChangeText={(text) => setText(text)} />
        </View>
    )
}

export default MyForm
