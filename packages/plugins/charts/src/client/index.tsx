import {PieChartOutlined} from '@ant-design/icons';
import {
  SchemaComponentOptions,
  SchemaInitializer,
  SchemaInitializerContext, SettingsCenterProvider
} from '@nocobase/client';
import {Card} from 'antd';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ChartBlockInitializer} from "./ChartBlockInitializer";

// export const DataAnalyseInitializer = (props) => {
//   const {insert} = props;
//   const {t} = useTranslation();
//   return (
//     <SchemaInitializer.Item
//       {...props}
//       icon={<PieChartOutlined/>}
//       onClick={() => {
//         insert({
//           type: 'void',
//           //TODO 添加设计器 'x-designer': 'G2Plot.Designer',
//           'x-component': 'CardItem',
//           properties: {
//             content: {
//               type: 'void',
//               'x-component': 'div',
//               'x-content': 'Hello Data Analyse',
//             },
//           },
//         });
//       }}
//       title={t('Hello Data Analyse')}
//     />
//   );
// };

export default React.memo((props) => {
  const items = useContext(SchemaInitializerContext);
  const children = items.BlockInitializers.items[1].children;
  children.push({
    key: 'chart',
    type: 'item',
    title: '{{t("Chart")}}',
    component: 'ChartBlockInitializer',
  });
  return (
    <SettingsCenterProvider
      settings={{
        'charts': {
          title: 'charts',
          icon: 'PieChartOutlined',
          tabs: {
            tab1: {
              title: 'charts tab',
              component: () => <Card bordered={false}>Hello Charts</Card>,
            },
          },
        },
      }}
    >
      <SchemaComponentOptions components={{ChartBlockInitializer}}>
        <SchemaInitializerContext.Provider value={items}>{props.children}</SchemaInitializerContext.Provider>
      </SchemaComponentOptions>
    </SettingsCenterProvider>
  );
});
