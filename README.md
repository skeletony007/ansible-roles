### Install

```
./install <system>
```

where `<system>` is file with a list of roles to use. For example:

```
package-manager
gnupg
pass
git
git-credential-manager
zsh
```

Any role that does not exist will be cause a warning and be skipped. All roles
can be listed with

```
find . \
    -maxdepth 1 \
    -type d \
    -exec test -f '{}/tasks/main.yml' \; -exec basename '{}' \; \
```

### Features

- [Ansible Roles] perform first time set up for programs and then handoff to dotfiles
- Minimal [Ansible playbook] generation using bespoke `install` script
- Integration with wider Ansible ecosystem
- Restore programs quickly on any system

### Disclaimer

**This does not replace a package manager**: Ansible roles in this repository
satisfy my needs but may not satisfy yours. Review any role before using it.

[Ansible Roles]: https://github.com/ansible/ansible-documentation/blob/HEAD/docs/docsite/rst/playbook_guide/playbooks_reuse_roles.rst
[Ansible playbook]: https://github.com/ansible/ansible-documentation/blob/HEAD/docs/docsite/rst/playbook_guide/playbooks_intro.rst
