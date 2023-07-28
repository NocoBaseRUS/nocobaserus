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
  'Delete a main version will cause all other revisions to be deleted too.': '删除主版本将导致其他版本一并被删除。',
  Loading: '加载中',
  'Load failed': '加载失败',
  Trigger: '触发器',
  'Trigger variables': '触发器变量',
  'Trigger data': '触发数据',
  'Trigger time': '触发时间',
  'Triggered at': '触发时间',

  'Form event': '表单事件',
  'Event triggers when submitted a workflow bound form action.': '在提交绑定工作流的表单操作按钮后触发。',
  'Form data model': '表单数据模型',
  'Use a collection to match form data.': '使用一个数据表来匹配表单数据。',
  'Associations to use': '待使用的关系数据',
  'Bind workflows': '绑定工作流',
  'Workflow will be triggered after submitting succeeded.': '提交成功后触发工作流。',
  'Workflow will be triggered after saving succeeded.': '保存成功后触发工作流。',
  'Workflow will be triggered directly once the button clicked.': '按钮点击后直接触发工作流。',
  'Submit to workflow': '提交至工作流',
  'Add workflow': '添加工作流',
  'Select workflow': '选择工作流',
  'Trigger data context': '触发数据上下文',
  'Leave context unselected will use full form data as context.': '触发数据上下文留空时将使用完整表单数据作为上下文。',
  'Select context': '选择上下文',
  'Collection event': '数据表事件',
  'Event will be triggered on collection data row created, updated or deleted.':
    '当数据表中的数据被新增、更新或删除时触发。',
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
  'Please select the associated fields that need to be accessed in subsequent nodes. With more than two levels of to-many associations may cause performance issue, please use with caution.':
    '请选中需要在后续节点中被访问的关系字段。超过两层的对多关联可能会导致性能问题，请谨慎使用。',
  'Schedule event': '定时任务',
  'Scheduled job base on time conditions.': '基于时间条件的计划任务',
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
  'Calculate an expression based on a calculation engine and obtain a value as the result. Variables in the upstream nodes can be used in the expression. The expression can be static or dynamic one from an expression collections.':
    '基于计算引擎对一个表达式进行计算，并获得一个值作为结果。表达式中可以使用上游节点里的变量。表达式可以是静态的，也可以是表达式表中的动态表达式。',
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
  'Could be used for manually submitting data, and determine whether to continue or exit. Workflow will generate a todo item for assigned user when it reaches a manual node, and continue processing after user submits the form.':
    '可用于人工提交数据，并决定是否继续或退出流程。工作流在执行到人工节点时会为被指派的用户生成待办事项，直到用户提交对应表单后继续处理该流程。',
  'Values preset in this form will override user submitted ones when continue or reject.':
    '表单中预设的字段值会在用户提交继续或拒绝时覆盖相应字段的值。',
  'Extended types': '扩展类型',
  'Node type': '节点类型',
  Calculation: '运算',
  'Expression type': '表达式类型',
  Static: '静态',
  Dynamic: '动态',
  'Select dynamic expression': '选择动态表达式',
  'Select the dynamic expression queried from the upstream node. You need to query it from an expression collection.':
    '从上游节点中选择查询出来的动态表达式。你需要从动态表达式类型的数据表中查询。',
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
  'Based on boolean result of the calculation to determine whether to "continue" or "exit" the process, or continue on different branches of "yes" and "no".':
    '基于运算结果的真假来决定“继续”或“退出”流程，或者在“是”与“否”的分支上分别继续。',
  Mode: '模式',
  'Continue when "Yes"': '“是”则继续',
  'Branch into "Yes" and "No"': '“是”和“否”分别继续',
  'Condition expression': '条件表达式',
  'Parallel branch': '分支',
  'Run multiple branch processes in parallel.': '并行运行多个分支流程。',
  'Add branch': '增加分支',
  'All succeeded': '全部成功',
  'Any succeeded': '任意成功',
  'Any succeeded or failed': '任意成功或失败',
  'Continue after all branches succeeded': '全部分支都成功后才能继续',
  'Continue after any branch succeeded': '任意分支成功后就继续',
  'Continue after any branch succeeded, or exit after any branch failed.':
    '任意分支成功就继续流程，或者任意分支失败就退出流程。',
  Loop: '循环',
  'Loop target': '循环对象',
  'Loop index': '当前索引',
  'Loop length': '循环长度',
  'By using a loop node, you can perform the same operation on multiple sets of data. The source of these sets can be either multiple records from a query node or multiple associated records of a single record. Loop node can also be used for iterating a certain number of times or for looping through each character in a string. However, excessive looping may cause performance issues, so use with caution.':
    '使用循环节点可以对多条数据进行同样的操作，多条数据的来源可以是查询节点的多条结果，或者一条数据的多条关系数据。也可以用于一定次数的循环，或者对字符串中每一个字符的循环处理。循环次数过高可能引起性能问题，请谨慎使用。',
  'Scope variables': '局域变量',
  'A single number will be treated as a loop count, a single string will be treated as an array of characters, and other non-array values will be converted to arrays. The loop node ends when the loop count is reached, or when the array loop is completed. You can also add condition nodes to the loop to terminate it.':
    '单一数字值将被视为循环次数，单一字符串值将被视为字符数组，其他非数组值将被转换为数组。达到循环次数，或者将数组循环完成后，循环节点结束。你也可以在循环中添加条件节点，以终止循环。',
  Delay: '延时',
  'Delay a period of time and then continue or exit the process. Can be used to set wait or timeout times in parallel branches.':
    '延时一段时间，然后继续或退出流程。可以用于并行分支中等待其他分支或设置超时时间。',
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
  'Create record form': '新增数据表单',
  'Update record form': '更新数据表单',
  'Filter settings': '筛选设置',

  'Create record': '新增数据',
  'Add new record to a collection. You can use variables from upstream nodes to assign values to fields.':
    '向一个数据表中添加新的数据。可以使用上游节点里的变量为字段赋值。',
  'Update record': '更新数据',
  'Update records of a collection. You can use variables from upstream nodes as query conditions and field values.':
    '更新一个数据表中的数据。可以使用上游节点里的变量作为查询条件和数据值。',
  'Update mode': '更新模式',
  'Update in a batch': '批量更新',
  'Update one by one': '逐条更新',
  'Update all eligible data at one time, which has better performance when the amount of data is large. But the updated data will not trigger other workflows, and will not record audit logs.':
    '一次性更新所有符合条件的数据，在数据量较大时有比较好的性能；但被更新的数据不会触发其他工作流，也不会记录更新日志。',
  'The updated data can trigger other workflows, and the audit log will also be recorded. But it is usually only applicable to several or dozens of pieces of data, otherwise there will be performance problems.':
    '被更新的数据可以再次触发其他工作流，也会记录更新日志；但通常只适用于数条或数十条数据，否则会有性能问题。',
  'Query record': '查询数据',
  'Query records from a collection. You can use variables from upstream nodes as query conditions.':
    '查询一个数据表中的数据。可以使用上游节点里的变量作为查询条件。',
  'Allow multiple records as result': '允许结果是多条数据',
  'If checked, when there are multiple records in the query result, an array will be returned as the result, which can be operated on one by one using a loop node. Otherwise, only one record will be returned.':
    '选中后，当查询结果有多条记录时，会返回数组作为结果，可以使用循环节点对它逐条操作；否则，仅返回一条数据。',
  'Exit when query result is null': '查询结果为空时，退出流程',
  'Please select collection first': '请先选择数据表',
  'Only update records matching conditions': '只更新满足条件的数据',
  'Please add at least one condition': '请添加至少一个条件',
  'Unassigned fields will be set to default values, and those without default values will be set to null.':
    '未被赋值的字段将被设置为默认值，没有默认值的设置为空值。',

  'Delete record': '删除数据',
  'Delete records of a collection. Could use variables in workflow context as filter. All records match the filter will be deleted.':
    '删除一个数据表中的数据。可以使用上游节点里的变量作为过滤条件。所有满足条件的数据都将被删除。',

  Aggregate: '聚合查询',
  'Counting, summing, finding maximum, minimum, and average values for multiple records of a collection or associated data of a record.':
    '对一个数据表里的多条数据或者一条数据里的关系数据进行统计、求和、求最大值、最小值、平均值。',
  'Aggregator function': '聚合函数',
  'Target type': '目标类型',
  'Data of collection': '数据表数据',
  'Data of associated collection': '关联数据表数据',
  'Field to aggregate': '聚合字段',
  Distinct: '去重',
  'Query result': '查询结果',

  'Trigger in executed workflow cannot be modified': '已经执行过工作流的触发器不能被修改',
  'Node in executed workflow cannot be modified': '已经执行过工作流中的节点不能被修改',
  'Can not delete': '无法删除',
  'The result of this node has been referenced by other nodes ({{nodes}}), please remove the usage before deleting.':
    '该节点的执行结果已被其他节点（{{nodes}}）引用，删除前请先移除引用。',

  'HTTP request': 'HTTP 请求',
  'Send HTTP request to a URL. You can use the variables in the upstream nodes as request headers, parameters and request body.':
    '向指定 URL 发送 HTTP 请求。可以使用上游节点里的变量作为请求头、参数和请求体。',
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

  'SQL action': 'SQL 操作',
  'Execute a SQL statement in database': '在数据库中执行一个 SQL 语句',
  'Usage of SQL query result is not supported yet.': 'SQL 执行的结果暂不支持使用。',
};
