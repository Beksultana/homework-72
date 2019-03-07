import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {getInfo} from "../../store/actions/action-info";

class MainContainer extends Component {

    componentDidMount(){
        this.props.getInfo();
    }

    render() {

        const infos = this.props.info ? <View style={styles.container}>
            {
                Object.keys(this.props.info).map((object) => {
                    return (
                        <View  key={this.props.info[object].data.id} >
                            <TouchableOpacity style={styles.infoBlock} >
                                <Image style={{width: 50, height: 50}} source={{uri: this.props.info[object].data.thumbnail}} />
                                <Text style={{flex:1, marginLeft: 5}}>{this.props.info[object].data.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View> : null;

        return (
            <View style={{marginTop: 30}}>
                <ScrollView>
                    {infos}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    infoBlock: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    }
});

const mapStateToProps = state => {
    return {
        info: state.getReducer.info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getInfo: () => dispatch(getInfo())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);