# 🪠 Azure DevOps Extension Documentation logger

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/survivorbat/azure-devops-extension-logger/deploy)
![npm](https://img.shields.io/npm/dt/azure-devops-extension-logger)
![GitHub](https://img.shields.io/github/license/survivorbat/azure-devops-extension-logger)

Wrapper for `tl.debug`, `console.log`, `tl.warn` and `tl.error`.

## ⬇️ Installation

`npm i azure-devops-extension-logger`

## 📋 Usage

```typescript
const logger = getLogger('AzureClient');
logger.debug('It works!');
logger.info('It works!');
logger.warning('It works!');
logger.error('It works!');
```

## 🔭 Plans

Not much yet
