import { LightningElement } from 'lwc';

export default class BasicDatatable extends LightningElement {

    createdWorkLogs = [
        { Name: 'WL-000344', Assigned_Resource__c: 'Sheridan Gill', Finance__c: 'L-0057385', Claimed_QTY__c: 100, Unbillable__c: true, Work_Date__c: 8/7/2024, Notes_Comments__c: 'testy work log' },
        { Name: 'WL-000344', Assigned_Resource__c: 'Sheridan Gill', Finance__c: 'L-0057385', Claimed_QTY__c: 100, Unbillable__c: false, Work_Date__c: 8/7/2024, Notes_Comments__c: 'testy work log' },
        { Name: 'WL-000344', Assigned_Resource__c: 'Sheridan Gill', Finance__c: 'L-0057385', Claimed_QTY__c: 100, Unbillable__c: true, Work_Date__c: 8/7/2024, Notes_Comments__c: 'testy work log' },
    ];
}
