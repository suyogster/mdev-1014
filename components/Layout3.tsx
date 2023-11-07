import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';

const routesInfo = [
    {
        id: 101,
        title: 'Mardi Himal Trek',
        description: 'The most popular trek route in the west.'
    },
    {
        id: 102,
        title: 'Manaslu Trek',
        description: 'An amazing route with all the adventures.',
    },
    {
        id: 103,
        title: 'Everest Base Camp Trek',
        description: 'The incredible route to the top of the world.',
    },
    {
        id: 104,
        title: 'Langtang Trek',
        description: 'A beautiful journey to the heart of himalayas.',
    },
];

export default function Layout3() {

    const handleTrekInfo = (id?: number) => {
        console.log('Handle the trek info::', id);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ padding: 20 }}
        >
            <View style={styles.headContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Layout 3 - Priyesh Gautam
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    ID: 200568939
                </Text>
            </View>
            <View>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/annapurna.jpg')}
                />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 40 }}>
                    The Best Trekking routes of Nepal
                </Text>
                <View style={{ marginTop: 5 }}>
                    <FlatList
                        data={routesInfo}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleTrekInfo(item.id)}>
                                <View style={styles.trekInfo}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.details}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f4f4f4',
    },
    headContainer: {
        flex: 1,
        backgroundColor: '#c7ba79',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderRadius: 20,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#79c794',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '100%',
        padding: 20,
        marginTop: 20,
    },
    imageStyle: {
        height: 180,
        width: '100%',
        marginTop: 20,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    trekInfo: {
        width: '100%',
        padding: 10,
        marginTop: 8,
        borderRadius: 6,
        backgroundColor: '#f4f4f4',
    }
});
