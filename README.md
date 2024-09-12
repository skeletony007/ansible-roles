# Ansible Roles

Opinionated Ansible roles to install all the programs.

## Features

-   [Ansible Roles] perform first time set up for programs
-   Minimal [Ansible playbook] generation using bespoke `install` script
-   Integration with wider Ansible ecosystem
-   Restore programs quickly on any computer

## Install

```
./install role ...
```

Any role that does not exist will be skipped and duplicates will only be run
the first time. Roles are played in sequence. All roles can be listed with

```
find . \
    -mindepth 1 \
    -maxdepth 1 \
    -type d \
    -exec [ -f '{}/tasks/main.yml' ] \; \
    -exec basename '{}' \;
```

Review any role before using it.

[Ansible Roles]: https://github.com/ansible/ansible-documentation/blob/HEAD/docs/docsite/rst/playbook_guide/playbooks_reuse_roles.rst
[Ansible playbook]: https://github.com/ansible/ansible-documentation/blob/HEAD/docs/docsite/rst/playbook_guide/playbooks_intro.rst
