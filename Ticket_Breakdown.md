# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Scope out the affected areas of this schema change
 - Thouroughly review the changes that might be required in response of this schema update within the code
 - ETA: 1 Story Point
 - Impl: Look for Agent entity related code and go through them

2. Creating a migration for this schema change
 - We need to run a DB migration to add the column for the custom ids in the Agent Table and remember to make it required since we are expecting faculty should be having their own id for every agent they have
 - ETA: 1 Story Point
 - Impl: create a new migration file using respective DB or language format accordingly and add column with name `custom_id` with datatype as VARCHAR(100) //Can be decided after consulting with Facilities like how longer lengths id they might be using

3. UI Change on the Agent details form
 - Since we are adding another required field in the DB schema for Agent we need this to reflect over the UI we are already having accordingly
 - ETA: 2 Story Point
 - Impl: Add another field element in the UI form and set mandatory within the code as well, write a missing check and show error if its not there and update that in the request payload from Frontend side

4. Update Backend Model for the Agent
 - The DB level change should reflect in our model class attributes we have for Agent as well. Add this attribute as a mandatory field of the model
 - ETA: 1 Story Point
 - Impl: Add one field `custom_id` in the model of Agent class so that it should remain in-sync with the DB schema

5. REST API changes
 - The REST API payload validators should also be updated since a new field has been added, the validators should validate this as required field for payload of Agent related requests
 - ETA: 2 Story Point
 - Impl: Update the validator code for REST api backend code so that we can be assure that we should be getting custom_id within the payloads of requests (where applicable)

6. Update the `getShiftsByFacility` function
 - Since we are adding another field in Agent class this would required an update with meta data we would be getting with this function
 - ETA: 1 Story Point
 - Impl: Where we are fetching the agent related meta data we need to make sure we are including this custom_id field data as well and returning that in result/return object of this function

7. Update the `generateReport` function
 - The added custom_id field should also appear in the PDF as well so we need to update this function to cater this change and add that field in the generated PDF too
 - ETA: 2 Story Point
 - Impl: Update the function to fetch this custom_id field from Agent object and map that as well in the final generated PDF report by making changes in to PDF structure code