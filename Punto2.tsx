import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const flatListData = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const sectionListData = [
    { title: 'Frutas', data: ['Manzana', 'Banana'] },
    { title: 'Verduras', data: ['Lechuga', 'Tomate'] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4ECDC4" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📱 Componentes React Native</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>View</Text>
          <Text style={styles.description}>Contenedor básico para otros componentes</Text>
          <View style={styles.viewExample}>
            <Text>Esto está dentro de un View</Text>
          </View>
        </View>

       
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text</Text>
          <Text style={styles.description}>Muestra texto en la pantalla</Text>
          <Text style={styles.textExample}>Texto de ejemplo con estilo personalizado</Text>
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Image</Text>
          <Text style={styles.description}>Muestra imágenes desde URL o assets</Text>
          <Image
            source={{ uri: 'https://picsum.photos/300/200' }}
            style={styles.imageExample}
          />
        </View>

      
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ScrollView</Text>
          <Text style={styles.description}>Contenedor con scroll (ya estás usando uno ahora)</Text>
          <View style={styles.scrollViewExample}>
            <Text>Pull to refresh habilitado </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Button</Text>
          <Text style={styles.description}>Botón nativo simple</Text>
          <Button
            title="Presiona aquí"
            onPress={() => Alert.alert('¡Botón presionado!')}
            color="#4ECDC4"
          />
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TouchableOpacity</Text>
          <Text style={styles.description}>Elemento táctil con efecto de opacidad</Text>
          <TouchableOpacity
            style={styles.touchableExample}
            onPress={() => Alert.alert('TouchableOpacity presionado')}
          >
            <Text style={styles.touchableText}>Toca aquí</Text>
          </TouchableOpacity>
        </View>

   
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pressable</Text>
          <Text style={styles.description}>Componente presionable con estados avanzados</Text>
          <Pressable
            style={({ pressed }) => [
              styles.pressableExample,
              pressed && styles.pressablePressed,
            ]}
            onPress={() => Alert.alert('Pressable presionado')}
          >
            {({ pressed }) => (
              <Text style={styles.touchableText}>
                {pressed ? '¡Presionado!' : 'Presiona aquí'}
              </Text>
            )}
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TextInput</Text>
          <Text style={styles.description}>Campo de entrada de texto</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe algo..."
            value={textValue}
            onChangeText={setTextValue}
          />
          {textValue ? <Text style={styles.inputValue}>Valor: {textValue}</Text> : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Switch</Text>
          <Text style={styles.description}>Interruptor on/off</Text>
          <View style={styles.switchContainer}>
            <Text>Estado: {switchValue ? 'Activado ' : 'Desactivado '}</Text>
            <Switch
              value={switchValue}
              onValueChange={setSwitchValue}
              trackColor={{ false: '#767577', true: '#4ECDC4' }}
              thumbColor={switchValue ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FlatList</Text>
          <Text style={styles.description}>Lista optimizada para grandes cantidades de datos</Text>
          <FlatList
            data={flatListData}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SectionList</Text>
          <Text style={styles.description}>Lista con secciones agrupadas</Text>
          <SectionList
            sections={sectionListData}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text>• {item}</Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
              </View>
            )}
            keyExtractor={(item, index) => item + index}
            scrollEnabled={false}
          />
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Modal</Text>
          <Text style={styles.description}>Ventana modal superpuesta</Text>
          <Button
            title="Abrir Modal"
            onPress={() => setModalVisible(true)}
            color="#FF6B6B"
          />
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>¡Modal!</Text>
                <Text style={styles.modalText}>Este es un modal superpuesto</Text>
                <Button
                  title="Cerrar"
                  onPress={() => setModalVisible(false)}
                  color="#4ECDC4"
                />
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alert</Text>
          <Text style={styles.description}>Alertas nativas del sistema</Text>
          <Button
            title="Mostrar Alert"
            onPress={() =>
              Alert.alert(
                'Título del Alert',
                'Este es el mensaje del alert',
                [
                  { text: 'Cancelar', style: 'cancel' },
                  { text: 'OK', onPress: () => console.log('OK') },
                ]
              )
            }
            color="#FFD93D"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ActivityIndicator</Text>
          <Text style={styles.description}>Indicador de carga animado</Text>
          <View style={styles.activityContainer}>
            <ActivityIndicator size="small" color="#4ECDC4" />
            <ActivityIndicator size="large" color="#FF6B6B" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>StatusBar</Text>
          <Text style={styles.description}>
            Controla la barra de estado del sistema (mira arriba de la app)
          </Text>
          <Text style={styles.statusBarInfo}>
            Actualmente configurado: light-content con fondo #4ECDC4
          </Text>
        </View>

    
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RefreshControl</Text>
          <Text style={styles.description}>
            Permite hacer "pull to refresh" - ¡Arrastra hacia abajo desde el inicio! ⬇️
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4ECDC4',
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 15,
    lineHeight: 18,
  },
  viewExample: {
    backgroundColor: '#FFD93D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textExample: {
    fontSize: 16,
    color: '#4ECDC4',
    fontWeight: '600',
  },
  imageExample: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  scrollViewExample: {
    backgroundColor: '#E8F8F7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  touchableExample: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressableExample: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressablePressed: {
    backgroundColor: '#3ABCB3',
    transform: [{ scale: 0.98 }],
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputValue: {
    marginTop: 10,
    fontSize: 14,
    color: '#4ECDC4',
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
  },
  listItem: {
    padding: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    borderRadius: 6,
  },
  sectionHeader: {
    backgroundColor: '#4ECDC4',
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  sectionHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    width: '80%',
    maxWidth: 300,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  modalText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  statusBarInfo: {
    fontSize: 12,
    color: '#4ECDC4',
    fontStyle: 'italic',
  },
  footer: {
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});