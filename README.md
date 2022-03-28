# Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

# Test Locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/hello/mock.json` if you're using NPM

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

# Example

- `npx sls invoke local -f getTotalParcelCount`

# Test Remotely

```
curl --location --request POST 'ENDPOINT TBD' --header 'Content-Type: application/json' --data-raw '{"name": "Frederic"}'
```

# Endpoints

TBD