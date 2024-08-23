import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const editorConfiguration = {
    toolbar: [
        '|',
        'bold',
        'italic',
        'link',
        '|',
        'outdent',
        'indent',
        '|',
        'undo',
        'redo'
      ],
      readOnly: false
};

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
          message: 'Hello World!',
        };
      }

      handleInputSubmit = () => {
        // this.setState({ message: event.target.value });
        console.log(this.state.message)
        this.props.setEditorInput(this.state.message)
      }
      
    render() {
        return (
            <div className="App">
                <h2 className='text-gray-700 text-lg font-bold pl-2'>{this.props.title}</h2>
                <div
                    className={" flex flex-col m-2 p-2 w-[89%] md:w-[92.5%]"}
                >
                    <CKEditor
                        editor={ Editor }
                        config={ editorConfiguration }
                        data={this.props.content}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                        } }
                        onChange={ ( event, editor ) => {
                            // console.log( { event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            const data = editor.getData();
                            this.props.setEditorInput(data)
                        } }
                        onFocus={ ( event, editor ) => {
                        } }
                    />
                </div>
                {/* <button onClick={this.handleInputSubmit}>Save</button> */}
            </div>
        );
    }
}

export default App;
