import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RichTextEditor } from 'react-native-zss-rich-text-editor';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RichTextEditor
         initialTitleHTML={this.props.initialTitleHTML}
         initialContentHTML={this.props.initialContentHTML}
         ref={r => this.richtext = r} 
         titlePlaceholder="Give your Card a title"
         contentPlaceholder="Write your text here..." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
