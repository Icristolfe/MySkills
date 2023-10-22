import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native'
import { Button } from '../Components/Button'
import { SkillCard } from '../Components/SkillCard'

interface SkillData {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    if (newSkill) {
      setMySkills((oldSkills) => [...oldSkills, data])
      setNewSkill('')
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    console.log(currentHour)
    if (currentHour < 12) {
      setGretting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Morning')
    } else {
      setGretting('Good Night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Welcome, Cristolfe</Text>

      <Text style={styles.grettings}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <Button title='Add' onPress={handleAddNewSkill} />

      <Text style={[styles.tittle, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            key={item.id}
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
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
  grettings: {
    color: '#FFF',
  },
})
