#!/usr/bin/env sh

set -o pipefail

linux_policy=$1

sudo plutil -convert xml1 -o "/Library/Managed Preferences/$USER/org.chromium.Chromium.plist" "$linux_policy"

defaults read "/Library/Managed Preferences/$USER/org.chromium.Chromium" >/dev/null

EXTENSIONS=$(jq -r '.["3rdparty"].extensions | to_entries[] | .key' /tmp/chromium-policies.json)

for EXTENSION in $EXTENSIONS; do
  sudo touch "/Library/Managed Preferences/$USER/org.chromium.Chromium.extensions.$EXTENSION.plist"

  PAYLOAD=$(jq -c ".\"3rdparty\".extensions[\"$EXTENSION\"]" "$linux_policy" | plutil -convert xml1 -o - -)
  LINES=$(echo "$PAYLOAD" | wc -l)

  sudo sh -c "echo '$(echo "$PAYLOAD" | head -n 4)
        <key>org.chromium.Chromium.extensions.$EXTENSION</key>
        $(echo "$PAYLOAD" | tail -n $((LINES - 3)) | head -n $((LINES - 4)))
        $(echo "$PAYLOAD" | tail -n 2)' >'/Library/Managed Preferences/$USER/org.chromium.Chromium.extensions.$EXTENSION.plist'"

  plutil -lint "/Library/Managed Preferences/$USER/org.chromium.Chromium.extensions.$EXTENSION.plist" || exit 1

  defaults read "/Library/Managed Preferences/$USER/org.chromium.Chromium.extensions.$EXTENSION" >/dev/null
done

# <https://www.chromium.org/administrators/mac-quick-start/>
