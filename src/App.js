
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

import { DatePicker, message ,Table} from 'antd';
import {Link} from 'react-router'
//pshr
const App = React.createClass({
    getInitialState() {
        return {
            date: ''
        };
    },
    handleChange(value) {
        message.info('您选择的日期是: ' + value.toString());
        this.setState({
            date: value
        });
    },
    render() {
        return (
            <div style={{width: 400, margin: '0 auto 100px'}}>
                <head>h1</head>
                <DatePicker onChange={this.handleChange} />
                <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
                <Table dataSource={dataSource} columns={columns} />
                <Link to={{pathname:'app2',query:{}}}>test</Link>
            </div>
        )
    }
});

export default App;