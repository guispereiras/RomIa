import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const pillars = [
  'Tutor IA conversacional para prática diária',
  'Treino de pronúncia com feedback orientado',
  'Criação automática de tarefas e flashcards',
  'Correção de textos com foco em proficiência'
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>RomIA • Tutor de Idiomas</Text>
        <Text style={styles.subtitle}>
          Base mobile-first para React Native com integração a backend e IA.
        </Text>

        {pillars.map((pillar) => (
          <View key={pillar} style={styles.card}>
            <Text style={styles.cardText}>{pillar}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220'
  },
  content: {
    padding: 24,
    gap: 16
  },
  title: {
    color: '#E2E8F0',
    fontSize: 28,
    fontWeight: '700'
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    lineHeight: 24
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    borderColor: '#334155',
    borderWidth: 1
  },
  cardText: {
    color: '#F8FAFC',
    fontSize: 15
  }
});
