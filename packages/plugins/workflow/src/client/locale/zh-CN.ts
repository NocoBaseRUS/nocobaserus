export default {
  Workflow: '工作流',
  'Execution history': '执行历史',
  Executed: '已执行',
  'Trigger type': '触发方式',
  Status: '状态',
  On: '启用',
  Off: '停用',
  Version: '版本',
  'Copy to new version': '复制到新版本',
  Duplicate: '复制',
  Loading: '加载中',
  'Load failed': '加载失败',
  Trigger: '触发器',
  'Trigger variables': '触发器变量',
  'Trigger data': '触发数据',
  'Trigger time': '触发时间',
  'Triggered at': '触发时间',
  'Collection event': '数据表事件',
  'Trigger on': '触发时机',
  'After record added': '新增数据后',
  'After record updated': '更新数据后',
  'After record added or updated': '新增或更新数据后',
  'After record deleted': '删除数据后',
  'Changed fields': '发生变动的字段',
  'Triggered only if one of the selected fields changes. If unselected, it means that it will be triggered when any field changes. When record is added or deleted, any field is considered to have been changed.':
    '只有被选中的某个字段发生变动时才会触发。如果不选择，则表示任何字段变动时都会触发。新增或删除数据时，任意字段都被认为发生变动。',
  'Only triggers when match conditions': '满足以下条件才触发',
  'Preload associations': '预加载关联数据',
  'Only configured association field could be accessed in following nodes': '仅已配置的关系数据可以在后续节点中被访问',
  'Schedule event': '定时任务',
  'Trigger mode': '触发模式',
  'Based on certain date': '自定义时间',
  'Based on date field of collection': '根据数据表时间字段',
  'Starts on': '开始于',
  'Ends on': '结束于',
  'No end': '不结束',
  'Exactly at': '当时',
  'Repeat mode': '重复模式',
  'Repeat limit': '重复次数',
  'No limit': '不限',
  Seconds: '秒',
  Minutes: '分钟',
  Hours: '小时',
  Days: '天',
  Weeks: '周',
  Months: '月',
  'No repeat': '不重复',
  Every: '每',
  'By minute': '按分钟',
  'By hour': '按小时',
  'By day': '按天',
  'By week': '按周',
  'By month': '按月',
  'By field': '数据表字段',
  'By custom date': '自定义时间',
  Advanced: '高级模式',
  End: '结束',
  'Node result': '节点数据',
  Calculator: '运算',
  'Arithmetic calculation': '算术运算',
  'String operation': '字符串',
  'System variables': '系统变量',
  'System time': '系统时间',
  'Date variables': '日期变量',

  'Executed at': '执行于',
  Queueing: '队列中',
  'On going': '进行中',
  Resolved: '完成',
  Pending: '待处理',
  Failed: '失败',
  Error: '出错',
  Aborted: '已终止',
  Canceled: '已取消',
  Rejected: '已拒绝',

  'Continue the process': '继续流程',
  'Terminate the process': '终止流程',
  'Save temporarily': '暂存',

  Operations: '操作',
  'This node contains branches, deleting will also be preformed to them, are you sure?':
    '节点包含分支，将同时删除其所有分支下的子节点，确定继续？',
  Control: '流程控制',
  'Collection operations': '数据表操作',
  Manual: '人工处理',
  'Extended types': '扩展类型',
  'Node type': '节点类型',
  Calculation: '运算',
  'Expression type': '表达式类型',
  Static: '静态',
  Dynamic: '动态',
  'Select dynamic expression': '选择动态表达式',
  'Variable datasource': '变量数据源',
  'Calculation engine': '运算引擎',
  Basic: '基础',
  'Calculation expression': '运算表达式',
  'Expression syntax error': '表达式语法错误',
  'Syntax references: ': '语法参考：',
  'Calculation result': '运算结果',
  True: '真',
  False: '假',
  concat: '连接',
  Condition: '条件判断',
  Mode: '模式',
  'Continue when "Yes"': '“是”则继续',
  'Branch into "Yes" and "No"': '“是”和“否”分别继续',
  'Condition expression': '条件表达式',
  'Parallel branch': '分支',
  'Add branch': '增加分支',
  'All succeeded': '全部成功',
  'Any succeeded': '任意成功',
  'Any succeeded or failed': '任意成功或失败',
  'Continue after all branches succeeded': '全部分支都成功后才能继续',
  'Continue after any branch succeeded': '任意分支成功后就继续',
  'Continue after any branch succeeded, or exit after any branch failed': '任意分支成功继续，或失败后退出',
  Loop: '循环',
  'Loop target': '循环对象',
  Delay: '延时',
  Duration: '时长',
  'End Status': '到时状态',
  'Select status': '选择状态',
  'Succeed and continue': '通过并继续',
  'Fail and exit': '失败并退出',

  Assignee: '负责人',
  Assignees: '负责人',
  'User interface': '操作界面',
  'Configure user interface': '配置界面',
  'View user interface': '查看界面',
  Separately: '分别处理',
  'Each user has own task': '每个人处理各自的任务',
  Collaboratively: '协作处理',
  'Everyone shares one task': '所有人共享同一个任务',
  Negotiation: '协商机制',
  'All pass': '全部通过',
  'Everyone should pass': '每个人通过才通过',
  'Any pass': '任意通过',
  'Anyone pass': '任何一人通过即通过',
  'Field name existed in form': '表单中已有对应标识的字段',
  'Custom form': '自定义表单',
  'Data record': '数据记录',

  'Create record': '新增数据',
  'Update record': '更新数据',
  'Query record': '查询数据',
  'Multiple records': '多条数据',
  'Fail on no data': '无数据时报错',
  'Please select collection first': '请先选择数据表',
  'Only update records matching conditions': '只更新满足条件的数据',
  'Please add at least one condition': '请添加至少一个条件',
  'Fields that are not assigned a value will be set to the default value, and those that do not have a default value are set to null.':
    '未被赋值的字段将被设置为默认值，没有默认值的设置为空值。',
  'Trigger in executed workflow cannot be modified': '已经执行过工作流的触发器不能被修改',
  'Node in executed workflow cannot be modified': '已经执行过工作流中的节点不能被修改',
  'Can not delete': '无法删除',
  'The result of this node has been referenced by other nodes ({{nodes}}), please remove the usage before deleting.':
    '该节点的执行结果已被其他节点（{{nodes}}）引用，删除前请先移除引用。',

  'HTTP request': 'HTTP 请求',
  'HTTP method': 'HTTP 方法',
  URL: '地址',
  Headers: '请求头',
  'Add request header': '添加请求头',
  Parameters: '参数',
  'Add parameter': '添加参数',
  Body: '请求体',
  'Use variable': '使用变量',
  Format: '格式化',
  Insert: '插入',
  'Timeout config': '超时设置',
  ms: '毫秒',
  'Input request data': '输入请求数据',
  'Only support standard JSON data': '仅支持标准 JSON 数据',
  '"Content-Type" only support "application/json", and no need to specify':
    '"Content-Type" 请求头仅支持 "application/json"，无需填写',
  'Ignore fail request and continue workflow': '忽略失败的请求并继续工作流',

  'Workflow todos': '工作流待办',
  Task: '任务',

  'Dynamic expression': '动态表达式',
  'An expression for calculation in each rows': '每行数据计算规则不同时使用',
  Unconfigured: '未配置',
};
