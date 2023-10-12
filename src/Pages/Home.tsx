import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native'
import Button from '../Components/Button'
import SkillCard from '../Components/SkillCard'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<string[]>([])

  function handleAddNewSkill(newSkill: string) {
    setMySkills((oldState) => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Welcome, Cristolfe</Text>

      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.tittle, { marginVertical: 50 }]}>My Skills</Text>
      {mySkills.map((skill) => (
        <SkillCard skill={skill} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  tittle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
})
