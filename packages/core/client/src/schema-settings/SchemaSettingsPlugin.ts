import { Plugin } from '../application/Plugin';
import { filterCollapseBlockSettings } from '../modules/blocks/filter-blocks/collapse/filterCollapseBlockSettings';
import { filterCollapseItemFieldSettings } from '../modules/blocks/filter-blocks/collapse/filterCollapseItemFieldSettings';
import { multiDataDetailsBlockSettings } from '../modules/blocks/data-blocks/details-multi/multiDataDetailsBlockSettings';
import { singleDataDetailsBlockSettings } from '../modules/blocks/data-blocks/details-single/singleDataDetailsBlockSettings';
import {
  creationFormBlockSettings,
  createFormBlockSettings,
} from '../modules/blocks/data-blocks/form/blockSettings:createForm';
import { customizeSaveRecordActionSettings } from '../modules/form-creation/schema-settings/customizeSaveRecordActionSettings';
import { customizeSubmitToWorkflowActionSettings } from '../modules/form-creation/schema-settings/customizeSubmitToWorkflowActionSettings';
import { cascadeSelectComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/cascadeSelectComponentFieldSettings';
import { datePickerComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/datePickerComponentFieldSettings';
import { fileManagerComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/fileManagerComponentFieldSettings';
import { recordPickerComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/recordPickerComponentFieldSettings';
import { selectComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/selectComponentFieldSettings';
import { subTablePopoverComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/subTablePopoverComponentFieldSettings';
import { subformComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/subformComponentFieldSettings';
import { subformPopoverComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/subformPopoverComponentFieldSettings';
import { tagComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/tagComponentFieldSettings';
import { uploadAttachmentComponentFieldSettings } from '../modules/form-creation/schema-settings/fieldComponents/uploadAttachmentComponentFieldSettings';
import { createSubmitActionSettings } from '../modules/form-creation/schema-settings/createSubmitActionSettings';
import {
  updateSubmitActionSettings,
  submitActionSettings,
} from '../modules/form-creation/schema-settings/updateSubmitActionSettings';
import { editFormBlockSettings } from '../modules/blocks/data-blocks/form/blockSettings:editForm';
import { filterFormBlockSettings } from '../modules/blocks/filter-blocks/form/filterFormBlockSettings';
import { filterFormItemFieldSettings } from '../modules/blocks/filter-blocks/form/filterFormItemFieldSettings';
import { gridCardBlockSettings } from '../modules/blocks/data-blocks/grid-card/gridCardBlockSettings';
import { listBlockSettings } from '../modules/blocks/data-blocks/list/listBlockSettings';
import { markdownBlockSettings } from '../modules/blocks/other-blocks/markdown/markdownBlockSettings';
import { dataSelectorBlockSettings } from '../modules/blocks/data-blocks/table-selector/blockSettings:tableSelector';
import { addNewActionSettings } from '../modules/table/schemaSettings/addNewActionSettings';
import { bulkDeleteActionSettings } from '../modules/table/schemaSettings/bulkDeleteActionSettings';
import { customizeAddRecordActionSettings } from '../modules/table/schemaSettings/customizeAddRecordActionSettings';
import { customizePopupActionSettings } from '../modules/table/schemaSettings/customizePopupActionSettings';
import { customizeUpdateRecordActionSettings } from '../modules/table/schemaSettings/customizeUpdateRecordActionSettings';
import { deleteActionSettings } from '../modules/table/schemaSettings/deleteActionSettings';
import { editActionSettings } from '../modules/table/schemaSettings/editActionSettings';
import { filterActionSettings } from '../modules/table/schemaSettings/filterActionSettings';
import { refreshActionSettings } from '../modules/table/schemaSettings/refreshActionSettings';
import { tableBlockSettings } from '../modules/blocks/data-blocks/table/blockSettings:table';
import { tableColumnSettings } from '../modules/blocks/data-blocks/table/fieldSettings:TableColumn';
import { viewActionSettings } from '../modules/table/schemaSettings/viewActionSettings';
import { addChildActionSettings } from '../modules/table/schemaSettings/addChildActionSettings';
import { expendableActionSettings } from '../modules/table/schemaSettings/expendableActionSettings';
import { fieldSettingsFormItem } from '../modules/blocks/data-blocks/form/fieldSettingsFormItem';

export class SchemaSettingsPlugin extends Plugin {
  async load() {
    // block settings
    this.schemaSettingsManager.add(tableBlockSettings);
    this.schemaSettingsManager.add(creationFormBlockSettings);
    this.schemaSettingsManager.add(createFormBlockSettings);
    this.schemaSettingsManager.add(editFormBlockSettings);
    this.schemaSettingsManager.add(filterFormBlockSettings);
    this.schemaSettingsManager.add(filterFormItemFieldSettings);
    this.schemaSettingsManager.add(multiDataDetailsBlockSettings);
    this.schemaSettingsManager.add(singleDataDetailsBlockSettings);
    this.schemaSettingsManager.add(dataSelectorBlockSettings);
    this.schemaSettingsManager.add(listBlockSettings);
    this.schemaSettingsManager.add(gridCardBlockSettings);
    this.schemaSettingsManager.add(filterCollapseBlockSettings);
    this.schemaSettingsManager.add(markdownBlockSettings);

    // action settings
    this.schemaSettingsManager.add(addNewActionSettings);
    this.schemaSettingsManager.add(filterActionSettings);
    this.schemaSettingsManager.add(refreshActionSettings);
    this.schemaSettingsManager.add(viewActionSettings);
    this.schemaSettingsManager.add(editActionSettings);
    this.schemaSettingsManager.add(deleteActionSettings);
    this.schemaSettingsManager.add(bulkDeleteActionSettings);
    this.schemaSettingsManager.add(customizeAddRecordActionSettings);
    this.schemaSettingsManager.add(customizePopupActionSettings);
    this.schemaSettingsManager.add(customizeUpdateRecordActionSettings);
    this.schemaSettingsManager.add(createSubmitActionSettings);
    this.schemaSettingsManager.add(updateSubmitActionSettings);
    this.schemaSettingsManager.add(submitActionSettings);
    this.schemaSettingsManager.add(customizeSaveRecordActionSettings);
    this.schemaSettingsManager.add(customizeSubmitToWorkflowActionSettings);
    this.schemaSettingsManager.add(addChildActionSettings);
    this.schemaSettingsManager.add(expendableActionSettings);

    // field settings
    this.schemaSettingsManager.add(fieldSettingsFormItem);
    this.schemaSettingsManager.add(tableColumnSettings);
    this.schemaSettingsManager.add(filterCollapseItemFieldSettings);

    // field component settings
    this.schemaSettingsManager.add(selectComponentFieldSettings);
    this.schemaSettingsManager.add(recordPickerComponentFieldSettings);
    this.schemaSettingsManager.add(subformComponentFieldSettings);
    this.schemaSettingsManager.add(subformPopoverComponentFieldSettings);
    this.schemaSettingsManager.add(subTablePopoverComponentFieldSettings);
    this.schemaSettingsManager.add(datePickerComponentFieldSettings);
    this.schemaSettingsManager.add(fileManagerComponentFieldSettings);
    this.schemaSettingsManager.add(tagComponentFieldSettings);
    this.schemaSettingsManager.add(cascadeSelectComponentFieldSettings);
    this.schemaSettingsManager.add(uploadAttachmentComponentFieldSettings);
  }
}
