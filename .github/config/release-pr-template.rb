chore(release): <%= Time.now %>
Changes of PRs included the release:
<% pull_requests.each do |pr| -%>
<%=  pr.to_checklist_item %>
<% end -%>
