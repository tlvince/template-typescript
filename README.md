# template-typescript

> TypeScript template

## Usage

Click the "Use this template" button:

![GitHub screenshot focussing on the template button](https://help.github.com/assets/images/help/repository/use-this-template-button.png)

See [Creating a repository from a template][docs] for more.

Alternatively, use [degit][]:

```shell
npx degit tlvince/template-typescript <project-name>
```

[docs]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[degit]: https://github.com/Rich-Harris/degit

## Suggested Workflow

1. Update the name (`perl -i -p -e "s/template-typescript/<repo-name>/g" *`)
2. Rewrite the README
3. Change the `version` in [package](package.json) to `0.0.0`
4. Remove `dry_run` and `--dry-run` from the [publish workflow](.github/workflows/publish.yml)
5. Update the `test:smoke` script in [package.json](package.json)
6. Create a npm token (`npm token create`), set it in the GitHub repo secrets (as `NPM_TOKEN`)
7. Push
8. Add a `dependencies` issue label
9. Grant repo access to [Dependabot](https://github.com/settings/installations/2625878)
10. Enable branch protection on `master`

## Author

© 2019 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](https://tlvince.mit-license.org).
