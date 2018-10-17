import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header.js';
import UserPreview from '../components/UserPreview.js'


export default class MakeMeetingScreen extends Component{
	render() {
		return(
			<View style={styles.container}>
				<Header 
					icon={require('../../assets/images/leftArrowIcon.png')}
					textCenter='Назначить встречу'
					textRight='Готово'
				/>

				<View style={styles.scrollContainer}>
					<ScrollView>
						<UserPreview 
							avatar={require('../../assets/images/u1.png')}
							name='Эндрю Гарфилд'
							profileNotes='1'
							messageNotes=''
							callNotes='5'
						/>
						<UserPreview 
							avatar={require('../../assets/images/u2.png')}
							name='Larisa Turgeon'
							profileNotes='1'
							messageNotes=''
							callNotes='1'
						/>
						<UserPreview 
							avatar={require('../../assets/images/u3.png')}
							name='Twanda Keaton'
							profileNotes='1'
							messageNotes=''
							callNotes='3'
						/>
						<UserPreview 
							avatar={require('../../assets/images/u4.png')}
							name='Полина Дешеулина'
							profileNotes=''
							messageNotes=''
							callNotes=''
						/>
						<UserPreview 
							avatar={require('../../assets/images/u5.png')}
							name='Ольга Цыганкова'
							profileNotes=''
							messageNotes=''
							callNotes=''
						/>
						<UserPreview 
							avatar={require('../../assets/images/u6.png')}
							name='Вадим Калаев'
							profileNotes=''
							messageNotes=''
							callNotes=''
						/>
						<UserPreview 
							avatar={require('../../assets/images/u7.png')}
							name='Вадим Калаев'
							profileNotes=''
							messageNotes=''
							callNotes=''
						/>
					</ScrollView>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},

	scrollContainer: {
		width: '100%',
		height: '88.6%',
	},
});