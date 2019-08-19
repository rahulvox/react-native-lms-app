
import { Item, Picker } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styleContent from './commonStyling';

export default class DropDownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.getView = this.getView.bind(this);
    }

    onSelectionChanged(value) {
        const {updateToParent, dropDownType} = this.props;
        this.setState({
            selected: value
          });
        if(updateToParent) {
            updateToParent({type:dropDownType, value})
        }
        
    }

    componentDidMount() {
        const{dataSource} = this.props;
        this.setState({
            selected: (dataSource && dataSource[0] && dataSource[0].name ) ? dataSource[0].name : ''
          });
    }
    
    getView() {
        const {selected = ''} = this.state;
        let returnedView;
        const { dataSource=["1","2","3"], onDropDownSelectionChange = this.onSelectionChanged } = this.props;
        const pickerItemArr = [];
        const indG = 'KEY_'+parseInt(Math.random(0,111)*1000);
        dataSource.forEach(singleItem => {
            const ind = 'KEY_'+parseInt(Math.random(0,19)*1000);
            pickerItemArr.push(
                (<Picker.Item 
                    key={ind}
                    label={singleItem.name} style={styleContent.dynamicComponentTextStyle} value={singleItem.code} />)
            )
        });
        returnedView = (
            <Picker
                key={indG}
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                textStyle={styleContent.dynamicComponentTextStyle}
                itemStyle={styleContent.dynamicComponentTextStyle}
                itemTextStyle={styleContent.dynamicComponentTextStyle}
                style={styleContent.dynamicComponentTextStyle}
                placeholderStyle={styleContent.dynamicComponentTextStyle}
                onValueChange={onDropDownSelectionChange}
                selectedValue={selected}
                placeholderIconColor="#007aff"
            >
                {pickerItemArr}

            </Picker>
        );
        return returnedView;
    }

    render() {
        return (
            <Item picker>
                {this.getView()}
            </Item>
        )
    }
}

